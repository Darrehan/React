/* eslint-disable react/prop-types */
   
const Hero = (props) => {
   
    return (
        <div>
            <button onClick={props.item}>Submit</button>
        </div>
    );
};

export default Hero;