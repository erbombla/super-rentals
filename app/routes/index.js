import Ember from 'ember';

var rentals = [{
  id: 1,
  owner: "Charlie Day",
  city: "Philadelphia",
  type: "Studio"
  bedrooms: 1
  image: "http://www.hotelroomsearch.net/im/hotels/hr/apartment-charlie-23.jpg"
}, {
  id: 2
  owner: "Eric Bomblatus",
  city: "Portland",
  type: "Condo",
  bedrooms: 2,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
}, {
  id: 3
  owner: "Alicia Vikander",
  city: "Seattle",
  type: "Apartment"
  bedrooms: 4,
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
}];

export default Ember.Route.extend({
  model() {
    return rentals;
  },
});
