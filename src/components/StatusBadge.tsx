interface StatusBadgeProps {
  status: 'LIVE' | 'READY' | 'PENDING';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    LIVE: 'text-accent',
    READY: 'text-yellow-400',
    PENDING: 'text-white/40',
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`status-dot ${
        status === 'LIVE' ? 'status-live' :
        status === 'READY' ? 'status-ready' : 'status-pending'
      }`} />
      <span className={`text-[0.65rem] uppercase tracking-[0.2em] font-bold ${styles[status]}`}>
        {status}
      </span>
    </div>
  );
};

export default StatusBadge;
