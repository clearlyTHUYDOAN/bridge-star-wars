import React, {PropTypes} from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

const Planet = (props) => (
    <Card style={{marginBottom: '20px'}} zDepth={2}>
        <CardHeader title={props.name}></CardHeader>
        <CardText>
            <h4>{props.name}</h4>
            <p>Climate: {props.climate}</p>
            <p>Terrain: {props.terrain}</p>
            <p>Population: {props.population}</p>
        </CardText>
    </Card>
)

Planet.PropTypes = {
    name: PropTypes.string.isrequired, // can also write React.PropTypes
    terrain: PropTypes.string.isrequired,
    climate: PropTypes.string.isrequired,
    population: PropTypes.string.isrequired
}

export default Planet;