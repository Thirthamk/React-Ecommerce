import Carousel from "react-elastic-carousel";
import React from "react";
import styles from "./styles.css";
import a from "../Images/a.jpg";
import b from "../Images/b.jpg";
import c from "../Images/c.jpg";
import d from "../Images/d.jpg";
import e from "../Images/e.jpg";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export const Slide = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Our Best selling Lehengas</h1>
            <div className={styles.App}>
                <Carousel breakPoints={breakPoints}>
                    <img src={a} alt="" height="200px" width="166px" />
                    <img src={b} alt="" height="200px" width="166px" />
                    <img src={c} alt="" height="200px" width="166px" />
                    <img src={d} alt="" height="200px" width="166px" />
                    <img src={e} alt="" height="200px" width="166px" />
                    <img src={a} alt="" height="200px" width="166px" />
                </Carousel>
            </div>
        </>
    );
    {
        /* <img src="a.jpg" /> */
    }
};

// export default slide;

// export const Slide = () => {

// export class Slide extends Component {
//     state = {
//         items: [
//             { id: 1, src: "a.jpg" },
//             { id: 1, src: "b.jpg" },
//             { id: 1, src: "c.jpg" },
//             { id: 1, src: "d.jpg" },
//             { id: 1, src: "e.jpg" },
//         ],
//     };
//     render() {
//         const { items } = this.state;
//         return (
//             <Carousel>
//                 <img src={first} alt="" height="80px" width="40px" />
//                 {items.map((product) => (
//                     // <div key={product.id}>
//                     //     {product.src}
//                     // </div>
//                     <div key={product.id}>
//                         <img
//                             src={product.src}
//                             height="8px"
//                             width="40px"
//                             alt=""
//                         />
//                     </div>
//                 ))}
//             </Carousel>
//         );
//     }
// }
