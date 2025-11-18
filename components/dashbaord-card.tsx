
import { Zap, FolderOpen, Film, Loader } from 'lucide-react'
import Card from './ui/dashboard-card'

export default function DashboardCards() {
  const stats = [
    {
      title: 'Credits Remaining',
      value: '120',
      unit: 'credits',
      description: 'Available for rendering',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      trend: '+12 this month',
    },
    {
      title: 'Active Projects',
      value: '8',
      unit: 'projects',
      description: 'In progress',
      icon: FolderOpen,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      trend: '+2 this week',
    },
    {
      title: 'Videos Created',
      value: '34',
      unit: 'total',
      description: 'Successfully rendered',
      icon: Film,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      trend: '+5 this week',
    },
    {
      title: 'Render Queue',
      value: '2',
      unit: 'processing',
      description: 'Currently rendering',
      icon: Loader,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      trend: 'Avg 4m per video',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} stat={stat} />
      ))}
    </div>
  )
}
