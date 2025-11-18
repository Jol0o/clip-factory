interface StatCardProps {
  stat: {
    title: string
    value: string
    unit: string
    description?: string
    icon: React.ComponentType<{ className?: string }>
    color: string
    bgColor: string
    borderColor?: string
    trend?: string
  }
}

export default function Card({ stat }: StatCardProps) {
  const Icon = stat.icon

  return (
    <div className={`bg-card border ${stat.borderColor || 'border-border'} rounded-xl p-6 hover:shadow-lg hover:border-primary/40 transition-all duration-300 hover:bg-card/60 group cursor-pointer`}>
      {/* Header with icon */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
          {stat.description && (
            <p className="text-muted-foreground text-xs mt-1">{stat.description}</p>
          )}
        </div>
        <div className={`${stat.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${stat.color}`} />
        </div>
      </div>

      {/* Main value */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-foreground">{stat.value}</span>
          <span className="text-muted-foreground text-sm font-medium">{stat.unit}</span>
        </div>
      </div>

      {/* Footer with trend and CTA */}
      <div className="pt-4 border-t border-border/50 flex items-center justify-between">
        {stat.trend && (
          <p className="text-primary/70 text-xs font-medium">{stat.trend}</p>
        )}
        <p className="text-primary text-xs font-medium group-hover:translate-x-1 transition-transform duration-200">
          View details →
        </p>
      </div>
    </div>
  )
}
