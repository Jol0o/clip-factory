
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Plus, Eye } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: 'Product Launch 2025',
      items: 8,
      lastUpdated: '2 days ago',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Spring Promo',
      items: 14,
      lastUpdated: '6 hours ago',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Old Campaign',
      items: 22,
      lastUpdated: '2 months ago',
      status: 'Archived',
    },
    {
      id: 4,
      name: 'Q4 Marketing',
      items: 5,
      lastUpdated: '1 week ago',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Holiday Special',
      items: 19,
      lastUpdated: '3 days ago',
      status: 'Active',
    },
  ]

  return (
        <div className="flex-1 overflow-auto container mx-auto">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Projects</h2>
                <p className="text-muted-foreground text-sm mt-1">Manage all your video projects</p>
              </div>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Create Project
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Projects</CardTitle>
                <CardDescription>View and manage your projects</CardDescription>
              </CardHeader>
              <CardContent>
                {projects.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Project Name</TableHead>
                          <TableHead>Items</TableHead>
                          <TableHead>Last Updated</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {projects.map((project) => (
                          <TableRow key={project.id}>
                            <TableCell className="font-medium">{project.name}</TableCell>
                            <TableCell>{project.items} assets</TableCell>
                            <TableCell className="text-muted-foreground">{project.lastUpdated}</TableCell>
                            <TableCell>
                              <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                                {project.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" className="gap-2">
                                <Eye className="w-4 h-4" />
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-muted-foreground mb-4">No projects yet. Create your first project.</p>
                    <Button className="gap-2">
                      <Plus className="w-4 h-4" />
                      Create Project
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
  )
}
