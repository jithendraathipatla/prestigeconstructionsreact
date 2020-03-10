import Layout from '../Components/Layout';
import OverviewComponent from '../Components/Overview';
import AmenitiesComponent from '../Components/Amenities';
import LocationComponent from '../Components/location';
import SideMenu from '../Components/SideMenu';

const Botanique = () => {
    return(
        <Layout>
          <SideMenu project="Prestige Botanique"/>
          <OverviewComponent title="Botanique Overview"/>
          <hr/>
          <AmenitiesComponent title="Botanique Amenities"/>
          <hr/>
          <LocationComponent title="Botanique Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2735931848188!2d77.57796491413502!3d12.95433691876352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e8bb736e65%3A0xb451cc1a6240f293!2sPrestige%20Botanique!5e0!3m2!1sen!2sin!4v1583827427402!5m2!1sen!2sin"/>
        </Layout>
    )
}

export default Botanique;