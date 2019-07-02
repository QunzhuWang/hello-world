import React from "react"
import Layout from "../components/layout"
import { Row, Column} from "../components/grid"

const Moldflow = () =>(
    <Layout>
        <div style={{maxWidth:"1440px", margin:"0 auto", padding:"0 2rem"}}>
            <Row style={{ margin: "1.5rem"}}>
                <Column></Column>
                <h1>Moldflow</h1>
            </Row>
        </div>
    </Layout>
)


export default Moldflow