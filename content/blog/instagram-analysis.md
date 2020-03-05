---
author: "Yuqi Liao"
date: 2018-10-31
linktitle: Instagram @WeThePeopleDC
title: Instagram @WeThePeopleDC
highlight: true
image: img/blog/points_edit.png
showonlyimage: false
---
If you have some footprints in Washington D.C. and are active on Instagram, chances are that you may have heard of, or are currently following, the Instagram account [@WeThePeopleDC](https://www.instagram.com/wethepeopledc/). As its name hints, the account runs on an interesting model: each day, the handle is held by a different person living or working in the nation’s capital. The idea is that the account followers get to see the district through the eyes of Washingtonians of all backgrounds.

## **Background**
Ever since its [very first post](https://www.instagram.com/p/ydP7XHCBtb/) back in Jan 2015, the account has grown exponentially. As of Oct 2018, it has 45 thousand followers and has been named the [best local Instagram account in DC](https://local.washingtoncitypaper.com/publication/best-of-dc/2018/people-and-places/best-local-instagram-account). It is so popular that the waitlist to hold the handle is now around 3 years, according to a few recent posts, such as [this one](https://www.instagram.com/p/BlyikC6B98i/) (regardless, you can sign up [here](https://bit.ly/2irlDIM))! The account is now a platform not only to showcase the community but also to engage and reshape it. Recently, [DC Mayor Bowser](https://www.instagram.com/p/BnmuhKah01m/) held the handle for a day to promote an event. Oh, and Obama had made a few appearances (check [here](https://www.instagram.com/p/0bKi_LCBm5/) and [here](https://www.instagram.com/p/Bj3feOkApPM/)) too through the lens of the account holders.

If you have followed the account for a while, it won’t be hard to pick up some popular themes among the posts of @WeThePeopleDC, such as [puppies](https://www.instagram.com/p/BpKT7QqHofW/), [food](https://www.instagram.com/p/BoIcglRB5_z), [drinks](https://www.instagram.com/p/BnxQ8DABYtu/), [coffee](https://www.instagram.com/p/BpEz1Fahw3v), and [the monument](https://www.instagram.com/p/Bm_mk7vBgiA). This got me thinking. What are the most typical (or clichéd) themes likely to be showcased by the account holder? Are certain places in DC featured more often than others? Are there any patterns in when and how people post? Are @WeThePeopleDC truly representative of the people in DC? In what I plan to be a blog post series (and this being the first post), I will show my attempt to address these questions.

## **Method**
Using a powerful [Instagram scraper tool](https://github.com/rarcega/instagram-scraper), I retrieved [information](https://github.com/yuqiliao/Instagram/blob/master/Data/wethepeopledc.json) (including captions, comments, likes, hashtags, time, and geo locations) of 9,728 @WeThePeopleDC posts from 01/29/2015, the day of its very first post, to 08/16/2018, the time when I scrapped the data. Since one Instagram post could have multiple pictures, these posts actually include 11,196 pictures and videos. I did some further geocoding, data merging and cleaning (details could be found [**here**](https://github.com/yuqiliao/Instagram/blob/master/Code/Instagram%20Data%20Analysis.R)) to construct [**a clean dataset**](https://github.com/yuqiliao/Instagram/blob/master/Data/wethepeople_clean_data.rdata) ready for the following analyses.

## **Most Liked Posts**
The 9,728 posts analyzed received 251 likes, on average. The number of likes ranges from 3 (mostly from early posts in 2015) to 3,873, with a median of 178. [The most-liked post](https://www.instagram.com/p/BguCzafhzBc/) (at the time of my scraping) is an excellent showcase of DC scene. The remaining top 5 most-liked posts could be found here: [2nd](https://www.instagram.com/p/BdeMo0zHxae/), [3rd](https://www.instagram.com/p/BbuB8ZFn8rS/), [4th](https://www.instagram.com/p/BWFb21ylr9X/), and [5th](https://www.instagram.com/p/BabgL98HEJ6/).

## **Most Commented Posts**
An average @WeThePeople post receives 7 comments while the [most commented post](https://www.instagram.com/p/BhhLxzLBqeK/?taken-by=wethepeopledc), which is about someone giving away free food, receives 315. The [second most commented](https://www.instagram.com/p/BgEYXkjBQjR/) post receives 192 comments, which reveals the power of free food. Browsing through the remaining top 5 most-comments, you will find some beautiful comments ([3rd](https://www.instagram.com/p/BfRnskAB7PZ/), [4th](https://www.instagram.com/p/BecEPmgnQih/), and [5th](https://www.instagram.com/p/BbS66nzHdNg/)).

## **Where Do People Post?**
A bit over 80% (7,789 out of 9,728) of all posts have geo location information. Some of the geotags are pretty general, like “Washington, District of Columbia”, or “Northeast Washington, Washington, District of Columbia”. Some get a bit more specific, such as “Columbia Heights” and “DuPont Circle”. The remaining geotags are at the level of a specific building or property, such as “Lincoln Memorial”, “Meridian Hill Park”, and “Hirshhorn Museum and Sculpture Garden”. The table below lists the geotags that are used at least 10 times at the time of my data retrieval. Did you see some of your favorite neighborhood, museum, café, bakery or restaurant in DC?

<div style="overflow: auto; height:150pt; width:100%;">

| Rank&nbsp;&nbsp;&nbsp; | Location Name                                                       | Location ID&nbsp;&nbsp;&nbsp; | N   |
|:-----------------------|:--------------------------------------------------------------------|:------------------------------|:----|
| 1                      | Washington, District of Columbia                                    | 213480180                     | 277 |
| 2                      | Columbia Heights                                                    | 431021846                     | 105 |
| 3                      | Shaw, Washington, D.C.                                              | 398052556                     | 80  |
| 4                      | United States Capitol                                               | 3001994                       | 72  |
| 5                      | Union Market DC                                                     | 17664335                      | 60  |
| 6                      | Dupont Circle                                                       | 590718213                     | 58  |
| 7                      | Meridian Hill Park                                                  | 240887                        | 56  |
| 8                      | Petworth, Washington, D.C.                                          | 226687206                     | 47  |
| 9                      | Adams Morgan                                                        | 388765809                     | 46  |
| 10                     | Northeast Washington, Washington, District of Columbia              | 255111089                     | 44  |
| 11                     | Logan Circle                                                        | 208941                        | 42  |
| 11                     | NoMa                                                                | 244637618                     | 42  |
| 13                     | Mount Pleasant Neighborhood, DC                                     | 220143606                     | 40  |
| 14                     | Northwest Washington, Washington, District of Columbia              | 373285541                     | 39  |
| 14                     | The Yards Park                                                      | 223871912                     | 39  |
| 14                     | Union Station, Washington D.C.                                      | 214513963                     | 39  |
| 17                     | Lincoln Memorial                                                    | 15712                         | 37  |
| 18                     | The Obama White House                                               | 225931565                     | 36  |
| 19                     | Nationals Park                                                      | 235453813                     | 35  |
| 20                     | Eastern Market                                                      | 153462                        | 33  |
| 21                     | Navy Yard, Washington, D.C.                                         | 254750439                     | 32  |
| 21                     | Southeast, Washington, D.C.                                         | 1003343474                    | 32  |
| 23                     | Georgetown, DC                                                      | 1009997177                    | 31  |
| 24                     | Hirshhorn Museum and Sculpture Garden                               | 175770                        | 29  |
| 24                     | National Building Museum                                            | 2222215                       | 29  |
| 26                     | Capitol Hill                                                        | 251483                        | 25  |
| 26                     | U Street                                                            | 218155430                     | 25  |
| 28                     | Brookland                                                           | 2258108                       | 24  |
| 29                     | Logan Circle, Washington, D.C.                                      | 661725620                     | 22  |
| 29                     | National Portrait Gallery, Smithsonian Institution                  | 216550363                     | 22  |
| 29                     | Park View, Washington, D.C.                                         | 348372014                     | 22  |
| 29                     | Renwick Gallery                                                     | 373555                        | 22  |
| 33                     | 9:30 Club                                                           | 42620                         | 21  |
| 33                     | Baked and Wired                                                     | 20908                         | 21  |
| 33                     | National Gallery of Art                                             | 4366681                       | 21  |
| 36                     | Farragut Square                                                     | 216247476                     | 20  |
| 36                     | Georgetown University                                               | 367909                        | 20  |
| 36                     | Washington Monument National Monument                               | 214773851                     | 20  |
| 36                     | Washington National Cathedral                                       | 619641                        | 20  |
| 40                     | Bloomingdale                                                        | 214808890                     | 19  |
| 40                     | Mount Pleasant, Washington, D.C.                                    | 266994012                     | 19  |
| 40                     | The Mall (Washington DC)                                            | 236471522                     | 19  |
| 43                     | Basilica of the National Shrine of the Immaculate Conception        | 698600                        | 18  |
| 43                     | Bloomingdale Neighborhood                                           | 112774                        | 18  |
| 43                     | Maketto                                                             | 522811549                     | 18  |
| 46                     | Blagden Alley                                                       | 220142279                     | 17  |
| 46                     | Glover Park                                                         | 581403474                     | 17  |
| 46                     | The Catholic University of America                                  | 1818173                       | 17  |
| 46                     | Walter E. Washington Convention Center                              | 21614                         | 17  |
| 46                     | Wharf DC                                                            | 240260328                     | 17  |
| 51                     | Smithsonian National Museum of African American History and Culture | 262515071                     | 16  |
| 51                     | Studio Theatre                                                      | 681473                        | 16  |
| 51                     | The John F. Kennedy Center for the Performing Arts                  | 1797069                       | 16  |
| 51                     | Trinidad, Washington, D.C.                                          | 288007973                     | 16  |
| 55                     | Big Bear Cafe                                                       | 268082                        | 15  |
| 55                     | CityCenterDC                                                        | 940940154                     | 15  |
| 57                     | A Baked Joint                                                       | 861977418                     | 14  |
| 57                     | Capital Area Food Bank                                              | 235218391                     | 14  |
| 57                     | Capital One Arena                                                   | 372247132                     | 14  |
| 57                     | Children's National Medical Center                                  | 221398401                     | 14  |
| 57                     | Congressional Cemetery                                              | 3097484                       | 14  |
| 57                     | Mellow Mushroom                                                     | 214103205                     | 14  |
| 63                     | Capitol Hill East                                                   | 1016211316                    | 13  |
| 63                     | Cardozo High School                                                 | 1899316                       | 13  |
| 63                     | DC Brau Brewing Company                                             | 3855792                       | 13  |
| 63                     | Dumbarton House, NSCDA Museum & Headquarters                        | 5068862                       | 13  |
| 63                     | La Colombe DC                                                       | 228681882                     | 13  |
| 63                     | Supreme Court of the United States                                  | 217378728                     | 13  |
| 63                     | The Barbie Pond on Avenue Q                                         | 827440940                     | 13  |
| 63                     | The Coupe                                                           | 37742190                      | 13  |
| 63                     | The Library of Congress                                             | 849479                        | 13  |
| 63                     | Tidal Basin                                                         | 342980053                     | 13  |
| 73                     | Compass Coffee                                                      | 255066865                     | 12  |
| 73                     | Foggy Bottom                                                        | 480653079                     | 12  |
| 73                     | Hill East, Capitol Hill, DC                                         | 257787457                     | 12  |
| 73                     | Le Diplomate                                                        | 75367954                      | 12  |
| 73                     | National Museum of Women in the Arts                                | 218723464                     | 12  |
| 73                     | NPR                                                                 | 123219                        | 12  |
| 73                     | Showtime Bar                                                        | 98872958                      | 12  |
| 73                     | Southwest Waterfront                                                | 226465082                     | 12  |
| 73                     | Southwest, Washington, D.C.                                         | 259248179                     | 12  |
| 73                     | The George Washington University                                    | 2150339                       | 12  |
| 73                     | Woodley Park, Washington, D.C.                                      | 249815242                     | 12  |
| 84                     | Dacha Beer Garden                                                   | 137265021                     | 11  |
| 84                     | Florida House                                                       | 650539693                     | 11  |
| 84                     | H St NE                                                             | 18957872                      | 11  |
| 84                     | Martin Luther King Jr. Memorial Library                             | 220273766                     | 11  |
| 84                     | National Museum of American History                                 | 838999                        | 11  |
| 84                     | Rock Creek Park                                                     | 214578741                     | 11  |
| 84                     | Thomas Jefferson Memorial                                           | 139456                        | 11  |
| 84                     | Washington Post                                                     | 48734                         | 11  |
| 92                     | Chinatown (Washington, D.C.)                                        | 267006300                     | 10  |
| 92                     | Crispus Attucks Park                                                | 2492759                       | 10  |
| 92                     | Dupont Circle Farmers Market                                        | 444809                        | 10  |
| 92                     | Dupont Circle Fountain                                              | 859993053                     | 10  |
| 92                     | Ebenezers Coffeehouse                                               | 52384                         | 10  |
| 92                     | El Rey DC                                                           | 219681075                     | 10  |
| 92                     | Georgetown Waterfront Park                                          | 848636417                     | 10  |
| 92                     | Georgetown, Washington, D.C.                                        | 505137722                     | 10  |
| 92                     | Open City at the National Cathedral                                 | 494672326                     | 10  |
| 92                     | Smithsonian American Art Museum and the Renwick Gallery             | 213933592                     | 10  |
| 92                     | Smithsonian's National Museum of the American Indian                | 483547                        | 10  |
| 92                     | The Royal                                                           | 404260334                     | 10  |
| 92                     | U.S. Botanic Garden                                                 | 1020983911                    | 10  |
| 92                     | Zeke's Coffee of DC                                                 | 161404230                     | 10  |

</div>
&nbsp;

Using both `ggolot2` and `ggmap`, I create the following map with red dots to visualize the location of @WeThePeople posts. Only a handful of posts are tagged outside of DC or outside of this map. Alpha (transparency) is set to be 0.5 so it is easier to see the intensity of some dots. The quick takeaway is that most dots are around the center of the city. Also, among the dots that scatter around each corner, the Southeast region seems to have especially fewer and lighter dots compared to other parts of DC. One caveat of interpreting this dot map, though, is that general locations like “Washington, District of Columbia” and more specific location such as “Lincoln Memorial” are all represented by dots. Ideally, I would only want to visualize the location at the building/property level. However, I haven’t found a way yet to distinguish the specificity of Instagram’s location ID without manual labor. If anyone has insights on this, please reach out!

&nbsp;
{{< figure src="/img/blog/points_edit.png" width=100% height="500" >}}
&nbsp;

I also created an area map to make the visualization and the takeaway cleaner. The package `tigris` was used to map DC by Census tracks. The caveat mentioned earlier was resolved in this area map after I removed posts tagged by the most general location, “Washington, District of Columbia”. The map reinforces the findings of the uneven distribution of the locations of @WeThePeople posts.

&nbsp;
{{< figure src="/img/blog/censustrack_edit.png" width=100% height="500" >}}
&nbsp;

This finding, however, does not mean that future handle holders should just post more pictures in places less represented to make the whole thing evenly distributed. It’s more of a reminder to us that there are many places no reached and stories untold even though @WeThePeopleDC as a platform is trying its best to engage Washingtonians.

## **Credits**
Special thanks to [Sifan](https://twitter.com/Sifan_Liu), [Trang](https://github.com/nguyentr17), and [Pablo](https://twitter.com/p_barbera) for inspiration and technical support for this post. Comments and new ideas for posts are all welcome!
