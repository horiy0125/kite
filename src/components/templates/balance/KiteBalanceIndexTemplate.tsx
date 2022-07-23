import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getBalancesApiClient } from '../../../api/clients/balance';
import { useAuth } from '../../../hooks/auth';
import { Balance } from '../../../types/balance';
import { KiteBaseTemplate } from '../base/KiteBaseTemplate';

export const KiteBalanceIndexTemplate: React.FC = () => {
  const auth = useAuth();
  const { authRequestHeaders } = auth;

  const [loading, setLoading] = useState(false);

  const [accrualMonth, setAccrualMonth] = useState(dayjs());
  const [balance, setBalance] = useState<Balance | null>(null);

  const selectedYear = useMemo(() => {
    return accrualMonth.year();
  }, [accrualMonth]);

  const selectedMonth = useMemo(() => {
    return accrualMonth.month() + 1;
  }, [accrualMonth]);

  useEffect(() => {
    setLoading(true);

    if (authRequestHeaders) {
      getBalancesApiClient(authRequestHeaders, selectedYear, selectedMonth)
        .then(data => {
          setBalance(data.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [accrualMonth]);

  return (
    <KiteBaseTemplate>
      <section>
        <h1>家計簿</h1>

        <div className="grid">
          <button
            onClick={() => setAccrualMonth(accrualMonth.add(-1, 'month'))}
          >
            前月
          </button>
          <button onClick={() => setAccrualMonth(accrualMonth.add(1, 'month'))}>
            来月
          </button>
        </div>

        <article aria-busy={loading}>
          {balance ? (
            <>
              <header>
                <h2>
                  {selectedYear}年{selectedMonth}月
                </h2>
              </header>

              <p>
                残高: {balance.balance}円（前月より{balance.changes}円変動）
                <br />
                収入計: {balance.totalReceipts}円
                <br />
                支出計: {balance.totalExpenses}円
              </p>
            </>
          ) : null}
        </article>
      </section>
    </KiteBaseTemplate>
  );
};
