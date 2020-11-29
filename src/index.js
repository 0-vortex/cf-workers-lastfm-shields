const schema = {
  schemaVersion: 1,
  label: 'Last Played',
  message: 'The Other Side of the Dark by Buckethead',
  color: 'lightgrey',
  labelColor: 'grey',
  namedLogo: 'last.fm',
  logoColor: 'red',
  style: 'for-the-badge',
};

const UnexpectedError = new Error('Unexpected response from Last.fm');

const handleRequest = async () => {
  const url = new URL(`https://ws.audioscrobbler.com/2.0/`);
  url.searchParams.append(`method`, `user.getrecenttracks`);
  url.searchParams.append(`format`, `json`);
  url.searchParams.append(`limit`, `1`);
  url.searchParams.append(`user`, USER);
  url.searchParams.append(`api_key`, API_KEY);

  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    const mostRecentPlayed = data.recenttracks.track[0];

    if (typeof (mostRecentPlayed) !== 'undefined') {
      schema.message = `${mostRecentPlayed.name} by ${mostRecentPlayed.artist['#text']}`;

      if (typeof (mostRecentPlayed['@attr']) !== 'undefined'
        && mostRecentPlayed['@attr'].nowplaying === true) {
        schema.message.color = 'red';
      }
    }

    return new Response(JSON.stringify(schema, null, 2), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      status: 200,
    });
  }

  if (response.status === 404) {
    UnexpectedError.message = `User not found`;
  }

  throw UnexpectedError;
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
