import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sonnet from "./Sonnet";
import { data } from "./data"
import "./tab.css";

function TabComponent() {
    return (
        // <div className='tab_container_change'>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className={`mb-4 tab_change_custom_style`}
                style={{ width: "80%", display: "flex", justifyContent: "space-evenly" }}
            >
                {data.map((data, key) => {
                    return (
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
        // </div>
    );
}

export default TabComponent;