import Layout from '../Components/Layout';
import OverviewComponent from '../Components/Overview';
import AmenitiesComponent from '../Components/Amenities';
import LocationComponent from '../Components/location';
import SideMenu from '../Components/SideMenu';


const doicevita = () => {
    return(
        <Layout>
           <SideMenu project="Prestige Dolce Vita"/>
          <OverviewComponent title="Dolce vita Overview"/>
          <hr/>
          <AmenitiesComponent title="Dolce vita Amenities"/>
          <hr/>
          <LocationComponent title="Dolce Vita Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.96872735442!2d77.7402523141352!3d12.973852018340834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae115b9966adff%3A0xbbc8e762a3036b41!2sPrestige%20Dolce%20Vita!5e0!3m2!1sen!2sin!4v1583827758989!5m2!1sen!2sin" />
        </Layout>
    )
}

export default doicevita;