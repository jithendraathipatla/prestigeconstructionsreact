import Layout from '../Components/Layout';
import OverviewComponent from '../Components/Overview';
import AmenitiesComponent from '../Components/Amenities';
import LocationComponent from '../Components/location';
import SideMenu from '../Components/SideMenu';


const lakeridge = () => {
    return(
        <Layout>
          <SideMenu project="Prestige Lake Ridge"/>
          <OverviewComponent title="Lake Ridge Overview"/>
          <hr/>
          <AmenitiesComponent title="Lake Ridge Amenities"/>
          <hr/>
          <LocationComponent title="Lake Ridge Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.171742611922!2d77.54183352164858!3d12.902199671598392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f0eee48361b%3A0x3c40e528e94bdec8!2sPrestige%20Lake%20Ridge!5e0!3m2!1sen!2sin!4v1583828452900!5m2!1sen!2sin"/>
        </Layout>
    )
}

export default lakeridge;