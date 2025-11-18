
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export default function BillingPage() {
  const billingHistory = [
    { id: 1, date: 'Dec 1, 2025', description: 'Subscription Renewal', amount: '$29', status: 'Paid' },
    { id: 2, date: 'Nov 1, 2025', description: 'Subscription Renewal', amount: '$29', status: 'Paid' },
    { id: 3, date: 'Oct 1, 2025', description: 'Subscription Renewal', amount: '$29', status: 'Paid' },
    { id: 4, date: 'Sep 1, 2025', description: 'Subscription Renewal', amount: '$29', status: 'Paid' },
  ]

  const creditsUsed = 80
  const creditsTotal = 100

  return (
        <div className="flex-1 overflow-auto container mx-auto">
          <div>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Billing</h2>
              <p className="text-muted-foreground text-sm mt-1">Manage your subscription and billing information</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Current Plan Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>Your subscription details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Plan Name</p>
                    <p className="font-semibold text-foreground">Pro Monthly</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="font-semibold text-foreground">$29/month</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Next Billing Date</p>
                    <p className="font-semibold text-foreground">December 21, 2025</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <Button className="w-full mt-6">Manage Subscription</Button>
                </CardContent>
              </Card>

              {/* Credits Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Credits</CardTitle>
                  <CardDescription>Your credit balance and usage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Credits Remaining</p>
                      <p className="font-semibold text-lg text-cyan-400">120</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Monthly Usage</p>
                      <p className="text-sm font-medium">{creditsUsed} / {creditsTotal}</p>
                    </div>
                    <Progress value={(creditsUsed / creditsTotal) * 100} className="h-2" />
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-foreground font-medium mb-1">Monthly Refill</p>
                    <p className="text-sm text-muted-foreground">100 credits per month</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Billing History */}
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>Your past transactions and invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {billingHistory.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                          <TableCell>{transaction.description}</TableCell>
                          <TableCell className="font-medium">{transaction.amount}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{transaction.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
  )
}
