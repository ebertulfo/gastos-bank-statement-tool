import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Gastos Bank Statement Tool
        </h1>
        <p className="text-xl text-muted-foreground">
          A modern tool for managing bank statements and expenses
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Feature One</CardTitle>
            <CardDescription>
              This is a sample card demonstrating the design system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Card content goes here. This is where you can add your feature
              details and information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Two</CardTitle>
            <CardDescription>
              Another example card with different content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This card showcases the consistent styling across components.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Three</CardTitle>
            <CardDescription>
              A third card to complete the grid layout
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Dark mode is fully supported throughout the application.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
