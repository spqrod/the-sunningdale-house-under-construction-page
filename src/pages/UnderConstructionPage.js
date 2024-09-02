import "./underConstructionPage.css";
import backgroundImage from '../background.jpg'; // Import the background image

export default function UnderConstructionPage() {
    return (
        <div 
            className="mainContainer underConstructionPage" 
            style={{ 
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundColor: 'rgba(129, 129, 129, 0.399)',
                backgroundBlendMode: 'darken'
            }}
        >
            <div className="blurContainer">
                <div className="contentContainer">
                    <h1>
                        Coming soon..
                    </h1>
                    <p>
                        We are working hard to open The Sunningdale House to serve you with the best experience in Lusaka.
                    </p>
                    <p>
                        Sunningdale House © 2024. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}