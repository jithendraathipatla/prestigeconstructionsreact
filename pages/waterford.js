import Layout from '../Components/Layout';
import OverviewComponent from '../Components/Overview';
import AmenitiesComponent from '../Components/Amenities';
import LocationComponent from '../Components/location';
import SideMenu from '../Components/SideMenu';

const waterford = () => {
    return(
        <Layout>
          <SideMenu project="Prestige Waterford"/>
          <OverviewComponent title="Waterford Overview"/>
          <hr/>
          <AmenitiesComponent title="Waterford Amenities"/>
          <hr/>
          <LocationComponent title="Waterford Location" iframe="null"/>
        </Layout>
    )
}

export default waterford;