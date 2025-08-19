import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChartComponent = () => {
  const [profile, setProfile] = useState('cyber');

  const dataSets = {
    cyber: {
      labels: [
        'SIEM & Log Analysis',
        'Penetration Testing',
        'Incident Response',
        'Threat Detection',
        'Cloud Security (AWS/GCP)',
        'Network Security',
        'Vulnerability Assessment',
        'Security Compliance'
      ],
      data: [4.5, 4, 4, 4.5, 4, 4, 4, 4],
      color: {
        background: 'rgba(239, 68, 68, 0.15)',
        border: '#ef4444'
      }
    },
    dev: {
      labels: [
        'Python/SQL',
        'React.js/JavaScript',
        'AI/ML (LangChain)',
        'Cloud Platforms',
        'API Development',
        'Data Visualization',
        'Version Control (Git)',
        'Agile/DevOps'
      ],
      data: [4.5, 4, 4, 4, 3.5, 4, 4, 3.5],
      color: {
        background: 'rgba(77, 181, 255, 0.2)',
        border: '#4db5ff'
      }
    },
    tools: {
      labels: [
        'Splunk/QRadar',
        'Wireshark/Nmap',
        'Burp Suite/Metasploit',
        'Docker/Kubernetes',
        'TIBCO Spotfire',
        'Google Cloud Platform',
        'Autopsy/Forensics',
        'Active Directory/IAM'
      ],
      data: [4.5, 4.5, 4, 3, 4, 4, 3.5, 4],
      color: {
        background: 'rgba(16, 185, 129, 0.15)',
        border: '#10b981'
      }
    }
  };

  const currentData = dataSets[profile];

  const chartData = {
    labels: currentData.labels,
    datasets: [
      {
        label: `${profile.charAt(0).toUpperCase() + profile.slice(1)} Skills`,
        data: currentData.data,
        backgroundColor: currentData.color.background,
        borderColor: currentData.color.border,
        borderWidth: 2,
        pointBackgroundColor: currentData.color.border,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: currentData.color.border,
        pointHoverRadius: 8,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          backdropColor: 'transparent',
          color: 'rgba(255, 255, 255, 0.7)',
          font: { size: 12 },
          callback: function(value) {
            return value;
          }
        },
        pointLabels: {
          color: currentData.color.border,
          font: {
            size: 13,
            weight: '500'
          },
          padding: 20
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          lineWidth: 1
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
          lineWidth: 1
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'rgba(255, 255, 255, 0.9)',
          font: {
            size: 14,
            weight: '500'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: currentData.color.border,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed.r}`;
          }
        }
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    },
    interaction: {
      mode: 'point',
      intersect: false
    }
  };

  const profileButtons = [
    { key: 'cyber', label: 'Cybersecurity', icon: '🛡️' },
    { key: 'dev', label: 'Development', icon: '💻' },
    { key: 'tools', label: 'Tools & Platforms', icon: '🔧' }
  ];

  return (
    <div style={{ width: '100%', height: '500px' }}>
      {/* Filter Buttons - Theme Adaptive */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {profileButtons.map(({ key, label, icon }) => (
          <button 
            key={key}
            className={`radar-filter-btn ${profile === key ? 'active' : ''}`}
            onClick={() => setProfile(key)}
            style={{ 
              margin: '0 0.5rem',
              padding: '0.75rem 1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '0.5rem',
              border: '2px solid var(--color-primary)',
              backgroundColor: profile === key ? 'var(--color-primary)' : 'transparent',
              color: profile === key ? 'var(--color-bg)' : 'var(--color-primary)',
              fontWeight: '500',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            onMouseOver={(e) => {
              if (profile !== key) {
                e.target.style.backgroundColor = 'var(--color-primary-variant)';
                e.target.style.color = 'var(--color-white)';
              }
            }}
            onMouseOut={(e) => {
              if (profile !== key) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--color-primary)';
              }
            }}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div style={{ height: '400px' }}>
        <Radar data={chartData} options={options} />
      </div>

      <style jsx>{`
        .radar-filter-btn:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        
        .radar-filter-btn:active {
          transform: translateY(1px);
        }
        
        /* Ensure buttons work in both themes */
        body.modern .radar-filter-btn {
          border-color: var(--color-primary);
        }
        
        body.hacker .radar-filter-btn {
          border-color: var(--color-primary);
        }
        
        body.modern .radar-filter-btn.active {
          background-color: var(--color-primary);
          color: var(--color-bg);
        }
        
        body.hacker .radar-filter-btn.active {
          background-color: var(--color-primary);
          color: var(--color-bg);
        }
      `}</style>
    </div>
  );
};

export default RadarChartComponent;