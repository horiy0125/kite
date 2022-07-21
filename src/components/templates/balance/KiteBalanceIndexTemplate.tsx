import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getBalancesApiClient } from '../../../api/clients/balance';
import { useAuth } from '../../../hooks/auth';
import { KiteBaseTemplate } from '../base/KiteBaseTemplate';

export const KiteBalanceIndexTemplate: React.FC = () => {
  const auth = useAuth();
  const { authRequestHeaders } = auth;

  const [loading, setLoading] = useState(false);

  const [accrualMonth, setAccrualMonth] = useState(dayjs());

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
        .then(console.log)
        .finally(() => {
          setLoading(false);
        });
    }
  }, [accrualMonth]);

  return (
    <KiteBaseTemplate>
      <section>
        <h1>家計簿</h1>

        <article aria-busy={loading}>
          <h2>
            {selectedYear}年{selectedMonth}月
          </h2>

          <div className="grid">
            <button
              onClick={() => setAccrualMonth(accrualMonth.add(-1, 'month'))}
            >
              前月
            </button>
            <button
              onClick={() => setAccrualMonth(accrualMonth.add(1, 'month'))}
            >
              来月
            </button>
          </div>
        </article>
      </section>
    </KiteBaseTemplate>
  );
};
