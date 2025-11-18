'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Copy, Eye, EyeOff } from 'lucide-react'

export default function SettingsPage() {
  const [fullName, setFullName] = useState('John Doe')
  const [email, setEmail] = useState('john@example.com')
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [renderAlerts, setRenderAlerts] = useState(true)
  const [showApiKey, setShowApiKey] = useState(false)

  const apiKey = 'pk_live_51234567890abcdefghijklmnop'
  const maskedApiKey = 'pk_live_••••••••••••••••••••••••••••'

  return (
        <div className="flex-1 overflow-auto container mx-auto">
          <div>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Settings</h2>
              <p className="text-muted-foreground text-sm mt-1">Manage your account and preferences</p>
            </div>

            <div className=" space-y-6">
              {/* Profile Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              {/* Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your app experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-t border-border/50"></div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="emailNotif" className="text-base">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive email updates and news</p>
                    </div>
                    <Switch id="emailNotif" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                  <div className="border-t border-border/50"></div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="renderAlerts" className="text-base">Render Completion Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified when videos finish rendering</p>
                    </div>
                    <Switch id="renderAlerts" checked={renderAlerts} onCheckedChange={setRenderAlerts} />
                  </div>
                </CardContent>
              </Card>

              {/* API Keys */}
              <Card>
                <CardHeader>
                  <CardTitle>API Keys</CardTitle>
                  <CardDescription>Manage your API credentials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Public API Key</Label>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 px-3 py-2 bg-muted rounded-md border border-border/50 font-mono text-sm text-foreground">
                        {showApiKey ? apiKey : maskedApiKey}
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          navigator.clipboard.writeText(apiKey)
                        }}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Regenerate Key
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
  )
}
