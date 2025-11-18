import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit2 } from 'lucide-react'

export default function ScriptsPage() {
  const scripts = [
    {
      id: 1,
      title: 'Summer Sale Promo',
      wordCount: 186,
      lastEdited: '3 hours ago',
      status: 'Ready',
    },
    {
      id: 2,
      title: 'New Product Launch Script',
      wordCount: 92,
      lastEdited: '1 day ago',
      status: 'Draft',
    },
    {
      id: 3,
      title: 'TikTok Short Script',
      wordCount: 55,
      lastEdited: '2 days ago',
      status: 'Ready',
    },
    {
      id: 4,
      title: 'Instagram Reel Script',
      wordCount: 78,
      lastEdited: '5 hours ago',
      status: 'Ready',
    },
    {
      id: 5,
      title: 'YouTube Intro Script',
      wordCount: 145,
      lastEdited: '1 week ago',
      status: 'Draft',
    },
  ]

  return (
        <div className="flex-1 overflow-auto">
          <div className="lg:p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Scripts</h2>
                <p className="text-muted-foreground text-sm mt-1">Create and manage your video scripts</p>
              </div>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                New Script
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Scripts</CardTitle>
                <CardDescription>Manage your scripts for video generation</CardDescription>
              </CardHeader>
              <CardContent>
                {scripts.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Script Title</TableHead>
                          <TableHead>Word Count</TableHead>
                          <TableHead>Last Edited</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {scripts.map((script) => (
                          <TableRow key={script.id}>
                            <TableCell className="font-medium">{script.title}</TableCell>
                            <TableCell>{script.wordCount} words</TableCell>
                            <TableCell className="text-muted-foreground">{script.lastEdited}</TableCell>
                            <TableCell>
                              <Badge variant={script.status === 'Ready' ? 'default' : 'secondary'}>
                                {script.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" className="gap-2">
                                <Edit2 className="w-4 h-4" />
                                Edit
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-muted-foreground mb-4">No scripts yet. Create your first script.</p>
                    <Button className="gap-2">
                      <Plus className="w-4 h-4" />
                      New Script
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
  )
}
