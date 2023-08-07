var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   solidangl.es   https:\/\/www.solidangl.es   copyright  "
},
{
  "id": "section-3d-coordinates",
  "level": "1",
  "url": "section-3d-coordinates.html",
  "type": "Section",
  "number": "1.1",
  "title": "The 3D Cartesian Coordinate System",
  "body": " The 3D Cartesian Coordinate System  Imagine you're a drone pilot tasked with navigating your drone to take aerial photographs of a cityscape. Suppose you need the drone to start from a point close to the ground, ascend to capture an aerial shot of a skyscraper, and then move horizontally to take photos of the cityscape. How would you account for these various movements in terms of coordinates?  When you walk on flat ground, you only need to think about moving forward, backward, left, and right. This is a two-dimensional movement: every location on your path can be pinpointed using just two coordinates. But when you're flying a drone, you also need to account for the altitude—how high or low the drone is. Suddenly, you're not just moving in a flat plane; you're moving in space! This movement adds a third dimension to your coordinates.   You may recall the 2D Cartesian coordinate system—a flat plane where any point can be located using two coordinates, x (horizontal) and y (vertical). When we introduce a third axis to account for the 'depth' or 'height' in space, we enter the realm of 3D geometry. The third axis, called the z-axis, stands perpendicular to the 2D plane formed by the x and y axes. If you imagine the x-axis as running left-to-right and the y-axis running forward-and-backward, the z-axis would run up-and-down.  Any point in this three-dimensional space is represented by an ordered triple of coordinates . The x-coordinate still tells you how far left or right the point is, the y-coordinate tells you how far forward or backward, and the new z-coordinate tells you how far up or down.  To better visualize this 3D space and get a hands-on experience with plotting points in it, head over to this link on math3d.org . Play with the sliders to move the point in 3D, and drag around to change perspective. You'll be using math3d.org a lot this semester, so feel free to play around with it!   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt with the help of OpenAI's ChatGPT.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
