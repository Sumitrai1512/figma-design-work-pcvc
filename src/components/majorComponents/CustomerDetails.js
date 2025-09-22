import React from 'react'
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, CardAction } from '../ui/card'

const CustomerDetails = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>CardAction</CardAction>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
  )
}

export default CustomerDetails