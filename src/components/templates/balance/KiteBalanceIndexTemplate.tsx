import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { getBalancesApiClient } from '../../../api/clients/balance';
import { useAuth } from '../../../hooks/auth';
import { KiteBaseTemplate } from '../base/KiteBaseTemplate';

export const KiteBalanceIndexTemplate: React.FC = () => {
  const auth = useAuth();
  const { authRequestHeaders } = auth;

  const [loading, setLoading] = useState(false);

  const now = dayjs();
  const [selectedYear, setSelectedYear] = useState(now.year());
  const [selectedMonth, setSelectedMonth] = useState(now.month() + 1);

  useEffect(() => {
    setLoading(true);

    if (authRequestHeaders) {
      getBalancesApiClient(authRequestHeaders)
        .then(console.log)
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <KiteBaseTemplate>
      <section>
        <h1>家計簿</h1>

        <article aria-busy={loading}>
          <h2>
            {selectedYear}年{selectedMonth}月
          </h2>

          <div className="grid">
            <button onClick={() => setSelectedMonth(selectedMonth - 1)}>
              前月
            </button>
            <button onClick={() => setSelectedMonth(selectedMonth + 1)}>
              来月
            </button>
          </div>
        </article>
      </section>
    </KiteBaseTemplate>
  );
};
