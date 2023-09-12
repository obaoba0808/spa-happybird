importScripts ( 'https://cdn.ampproject.org/sw/amp-sw.js' ); 
AMP_SW 。init ({ 
assetCachingOptions :  [{ 
regexp :  /\.(png|jpg)/ , 
cachingStrategy :  'CACHE_FIRST' 
}] 
});
