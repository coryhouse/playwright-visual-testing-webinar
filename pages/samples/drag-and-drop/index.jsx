import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';
import { useState } from 'react';

const iconStyle = {
    padding: '10px',
    color: 'white',
    backgroundColor: '#3069C5',
    borderRadius: '5px',
    backgroundImage: "linear-gradient(to top right, #4685EA, #1b3764)",
    boxShadow: "2px 2px 3px #102342"
}

export default function DragAndDropSample({}) {

    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);

    const handleDragStart = (e, position) => {
        e.dataTransfer.setData('itemPosition', position);
    };

    const handleDrop = (e, position) => {
        const initialPosition = e.dataTransfer.getData('itemPosition');

        const listItem = items[initialPosition];
        const newItemsArray = items.filter((item, index) => index !== Number(initialPosition));
        newItemsArray.splice(position, 0, listItem);

        setItems(newItemsArray);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <SampleWrapper>
            <div style={{margin: '100px', textAlign: 'center'}}>
                <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold', marginBottom: '50px'}}>
                    Drag & Drop Action
                </h2>
                {items.map((item, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={(e) => handleDragOver(e)}
                        style={{backgroundColor: "#1b3764", color: "white", padding: "20px 30px", cursor: 'move', width: '100px', margin: '20px auto', borderRadius: '5px'}}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <ConfigBar
                showConfig={false}
            />
        </SampleWrapper>
    )
}