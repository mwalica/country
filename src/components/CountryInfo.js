import React from 'react';

import Loader from './Loader'
import CardInfo from './CardInfo'

const CountryInfo = ({ searchCountry }) => {
  const [status, setStatus] = React.useState('idle');
  const [country, setCountry] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!searchCountry) {
      return;
    }

    setStatus('pending');

    fetch(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
      .then((res) => res.json())
      .then((data) => {
          if(data.message) {
            setError(data.message);
            setStatus('rejected');
          } else {
            setCountry(data[0]);
            setStatus('resolved');
          }
      })
      .catch((err) => {
        setError(err);
        setStatus('rejected');
      });
  }, [searchCountry]);

  if (status === 'idle') {
    return 'Enter country to form input';
  } else if (status === 'pending') {
    return <Loader />
  } else if (status === 'rejected') {
    return <div>{error}</div>;
  } else if (status === 'resolved') {
    return <CardInfo country={country}/>
  }
};

export default CountryInfo;
