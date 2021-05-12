import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../product";
import HomeScreen from "./HomeScreen";

 const ProductScreen =({match})=>  {
     const product = products.find((p) => p._id === match.params.id)
     
        return (
            <div>
                {product.name}
            </div>
        )
}

export default HomeScreen;