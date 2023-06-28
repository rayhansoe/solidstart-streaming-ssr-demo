import { ComponentExample } from "~/components/component-example"
import { Col, Grid } from "~/components/layout/grid"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

export function GridDemo() {
  return (
    <ComponentExample>
      <Grid cols={1} colsMd={2} colsLg={3} class="w-full gap-2">
        <Col span={1} spanLg={2}>
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
            </CardHeader>
            <CardContent>KPI 1</CardContent>
          </Card>
        </Col>
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardContent>KPI 2</CardContent>
        </Card>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
            </CardHeader>
            <CardContent>KPI 3</CardContent>
          </Card>
        </Col>
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardContent>KPI 4</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardContent>KPI 5</CardContent>
        </Card>
      </Grid>
    </ComponentExample>
  )
}
