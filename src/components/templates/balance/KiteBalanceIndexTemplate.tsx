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
          {loading === false && balance ? (
            <>
              <header>
                <h2>
                  {selectedYear}年{selectedMonth}月
                </h2>
              </header>

              <h3>
                残高: {balance.balance}円（+{balance.changes}円）
              </h3>

              <div className="grid">
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>日付</th>
                        <th>タイトル</th>
                        <th>金額</th>
                      </tr>
                    </thead>

                    <tbody>
                      {balance.expenses.map(expense => (
                        <tr key={expense.id}>
                          <td>{expense.accrualDate}</td>
                          <td>{expense.title}</td>
                          <td>{expense.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  支出計: {balance.totalExpenses}円
                </div>

                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>日付</th>
                        <th>タイトル</th>
                        <th>金額</th>
                      </tr>
                    </thead>

                    <tbody>
                      {balance.receipts.map(receipt => (
                        <tr key={receipt.id}>
                          <td>{receipt.accrualDate}</td>
                          <td>{receipt.title}</td>
                          <td>{receipt.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  収入計: {balance.totalReceipts}円
                </div>
              </div>
            </>
          ) : null}
        </article>
      </section>
    </KiteBaseTemplate>
  );
};
