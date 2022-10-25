import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sonnet from "./Sonnet";
import { data } from "./data"

function TabComponent() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >            
            {data.map((data, key) => {
                return(
                    <Tab key={key} eventKey={data.eventKey} title={data.title}>
                        <Sonnet
                            heading={data.heading}
                            content={data.content}
                            image={data.image}
                        />
                    </Tab>
                )
            })}
        </Tabs>
    );
}

export default TabComponent;