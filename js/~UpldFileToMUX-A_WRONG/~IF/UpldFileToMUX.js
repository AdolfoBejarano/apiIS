app.post('/upload', async (req, res) => {
  try {
    const response = await axios.post(`${baseUrl}/video/v1/uploads`, { 
      "cors_origin": "*",
      "new_asset_settings": {
      "playback_policy": [
        "public"
      ],
    } }, options)
    return res.send(response.data && response.data.data);
  } catch (errorRes) {
    return Promise.reject(
      (errorRes.response && errorRes.response.data.error) || errorRes
    );
  }
})