import axios from 'axios';
import { useEffect, useState } from 'react';

interface IGeoLocation {
  countryCode: string;
  countryName: string;
  provinceCode: string | null;
  provinceName: string | null;
}

export const useCountryCode = () => {
  const [ countryCode, setCountryCode ] = useState<string>();

  useEffect(() => {
    const axiosCancelSource = axios.CancelToken.source();

    (async () => {
      try {
        const response = await axios.get<IGeoLocation>('https://api.qccareerschool.com/geoLocation/ip', { cancelToken: axiosCancelSource.token });
        setCountryCode(response.data.countryCode);
      } catch (err) {
        //
      }
    })();

    return () => {
      axiosCancelSource.cancel('component unmounted');
    };
  }, []);

  return countryCode;
};
