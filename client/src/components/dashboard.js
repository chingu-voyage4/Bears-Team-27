import React, { Component } from 'react';

import ItemDetail from './ItemDetail';

class Dashboard extends Component {
  render () {
    return (
			<div className='items'>
				<ItemDetail item="Sofa" room="Living Room" itemDescription="L-shaped sectional"
					serialNumber="n/a" itemValue="$1000" purchaseDate="4 February, 2018" expDate="3 February, 2019"/>
				<ItemDetail item="Dresser" room="Garage" itemDescription="Some Sporty Stuff"
					serialNumber="84-3392-0974" itemValue="$2500" purchaseDate="29 October, 2000" expDate="28 October, 2003"/>
				<ItemDetail item="Sporty Stuff" room="Guest Bedroom" itemDescription="It's a bed"
					serialNumber="n/a" itemValue="$1300" purchaseDate="1 January, 2018" expDate="31 December, 2028"/>
				<ItemDetail item="Nespresso Machine" room="Kitchen" itemDescription="Super fancy coffee machine"
					serialNumber="84-3392-0974" itemValue="$599" purchaseDate="29 October, 2015" expDate="n/a"/>
				<ItemDetail item="Persian Rug" room="Living Room" itemDescription="Souvenir from Persia"
					serialNumber="n/a" itemValue="priceless" purchaseDate="10 June, 2011" expDate="n/a"/>
			</div>
  );
  }
}

export default Dashboard;
