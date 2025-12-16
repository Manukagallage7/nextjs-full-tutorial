import UserAnalytics from '../components/UserAnalytics'; // Replace with the actual path
import RevenueMetrics from '../components/RevenueMetrics'; // Replace with the actual path
import Notifications from '../components/Notifications'; // Replace with the actual path

export default function ComplexDashboardLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
    <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
        <h1>Complex Dashboard Header</h1>
    </header>
    <main style={{ display: 'flex', gap: '1rem' }}>
        <section style={{ flex: 2, backgroundColor: '#f0f0f0', padding: '1rem' }}>
        {children}
        </section>
        <aside style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <UserAnalytics />
        <RevenueMetrics />
        <Notifications />
        </aside>
    </main>
    <footer style={{ backgroundColor: 'lightgray', padding: '1rem' }}>
        <p>Footer</p>
    </footer>
    </div>
);
}