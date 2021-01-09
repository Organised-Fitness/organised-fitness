import React from 'react'; 
import './home.css'

const home = () => {
    return (
        <>
            <div className = "container">
                    <div className="banner">
                        <img className="frontbanner" src="/images/frontbanner.jpg" alt="frontbanner"/>
                        <div className="text-block">
                            <h4>F_T BODY</h4>
                            <h4>ITS YOUR CHOICE</h4>
                            <p>ORGANISE YOURSELF FIT</p>
                        </div>
                    </div>
            </div>
            <div className="section-divider">
                <div className="container">
                        <div className="content">
                            <h1>Welcome</h1>
                            <div className="info">
                            <p>Organised Fitness is the ultimate tool to personalise your workouts. Create a workout specifically for you, whether it be a chest day or leg day.</p> 
                            <p>Fitness Organised gives you the opportunity to create your own workouts by inserting what exercises you would like to do including how many sets and reps.</p>
                            <p>You can then access these workouts again in the future or create completely new ones.</p>
                            </div>                
                        </div>
                </div>
            </div>
            <div className="section-divider grey">
                <div className="container">
                        <div className="content">
                            <h1>Welcome</h1>
                            <div className="info">
                            <p>Organised Fitness is the ultimate tool to personalise your workouts. Create a workout specifically for you, whether it be a chest day or leg day.</p> 
                            <p>Fitness Organised gives you the opportunity to create your workouts by inserting what exercises you would like to do including how many sets and reps.</p>
                            <p>You can then access these workouts again in the future or create completely new ones.</p>
                            </div>                
                        </div>
                </div>
            </div>
        </>
    );
}
 
export default home;