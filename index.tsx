import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    const [activeView, setActiveView] = useState('dashboard');

    const styles = {
        container: {
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: '#f4f6f8',
        },
        sidebar: {
            width: '260px',
            backgroundColor: '#0d2c4f',
            color: 'white',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        },
        mainContent: {
            flex: 1,
            padding: '30px 40px',
            overflowY: 'auto',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
        },
        headerTitle: {
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1c1c1e',
        },
        schoolName: {
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '20px 0',
            borderBottom: '1px solid #3a5b82',
            marginBottom: '20px',
        },
        nav: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
        navItem: {
            display: 'flex',
            alignItems: 'center',
            padding: '12px 15px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
            fontSize: '16px',
        },
        navIcon: {
            marginRight: '15px',
            width: '24px',
            height: '24px'
        },
        cardContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
        },
        card: {
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
        },
        cardTitle: {
            fontSize: '18px',
            fontWeight: '500',
            color: '#555',
            marginBottom: '10px'
        },
        cardValue: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#0d2c4f',
        },
        placeholder: {
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            textAlign: 'center',
            fontSize: '20px',
            color: '#777',
        }
    };

    const NavItem = ({ icon, text, viewName }) => (
        <div
            style={{
                ...styles.navItem,
                backgroundColor: activeView === viewName ? '#2a9d8f' : 'transparent',
            }}
            onClick={() => setActiveView(viewName)}
        >
            <svg style={styles.navIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {icon}
            </svg>
            {text}
        </div>
    );
    
    const Dashboard = () => (
        <div style={styles.cardContainer}>
            <div style={styles.card}>
                <span style={styles.cardTitle}>Total Étudiants</span>
                <span style={styles.cardValue}>482</span>
            </div>
            <div style={styles.card}>
                <span style={styles.cardTitle}>Paiements en attente</span>
                <span style={styles.cardValue}>15</span>
            </div>
            <div style={styles.card}>
                <span style={styles.cardTitle}>Prochains Examens</span>
                <span style={styles.cardValue}>3</span>
            </div>
            <div style={styles.card}>
                <span style={styles.cardTitle}>Annonces Récentes</span>
                <span style={styles.cardValue}>2</span>
            </div>
        </div>
    );

    const Placeholder = ({title}) => (
        <div style={styles.placeholder}>
            <h2>{title}</h2>
            <p>Ce module est en cours de développement.</p>
        </div>
    );

    const renderView = () => {
        switch(activeView) {
            case 'dashboard':
                return <Dashboard />;
            case 'students':
                return <Placeholder title="Gestion des Étudiants" />;
            case 'academics':
                return <Placeholder title="Gestion Académique" />;
            case 'finance':
                return <Placeholder title="Gestion Financière" />;
            case 'communication':
                 return <Placeholder title="Communication & Marketing" />;
            default:
                return <Dashboard />;
        }
    };

    const viewTitles = {
        dashboard: 'Tableau de Bord',
        students: 'Étudiants',
        academics: 'Académique',
        finance: 'Finance',
        communication: 'Communication'
    };
    
    const icons = {
        dashboard: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
        students: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
        academics: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
        finance: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />,
        communication: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.5M11 14.118V5.882m0 8.236a2.25 2.25 0 01-1.07 1.918l-2.147 1.533a1.76 1.76 0 00-1.22 2.768l2.57 5.79a1.75 1.75 0 003.35-.48l2.57-5.79a1.75 1.75 0 00-1.22-2.768L12.07 16.03a2.25 2.25 0 01-1.07-1.918z" />
    };

    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>
                <div style={styles.schoolName}>École Pro</div>
                <nav style={styles.nav}>
                    <NavItem icon={icons.dashboard} text="Tableau de Bord" viewName="dashboard" />
                    <NavItem icon={icons.students} text="Étudiants" viewName="students" />
                    <NavItem icon={icons.academics} text="Académique" viewName="academics" />
                    <NavItem icon={icons.finance} text="Finance" viewName="finance" />
                    <NavItem icon={icons.communication} text="Communication" viewName="communication" />
                </nav>
            </aside>
            <main style={styles.mainContent}>
                <header style={styles.header}>
                    <h1 style={styles.headerTitle}>{viewTitles[activeView]}</h1>
                </header>
                {renderView()}
            </main>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
