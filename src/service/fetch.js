import axios from "axios";
const KEY =
  "AU4NgpIaexXsUYJhhd8QXMbo7d02oFP4Pn-mleUT3Sjqij5dyf0qr6GZ_BgUDu-LTPYRNw1I1Zouw2l5YXNvcrwBWQvzdfOEm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnlFFJdsZ45o9OHBZtd23PRzGqnMMtwVXxZatTcZ_ElWWQARivlerawy0qOn_ogddlOaIY5A3XJYuWNj0SVUwM";
const URL = "https://script.googleusercontent.com/macros/echo";
const lib = "MQ5y52npMqnCycenuTos7mqgLslxuhQuA";

export async function requestAxios(method = "get", param) {
  let response;
  try {
    response = await axios.get(URL, {
      params: {
        user_content_key: KEY,
        lib: lib,
      },
    });

    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
}
