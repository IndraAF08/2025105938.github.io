*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    font-family:'Segoe UI',sans-serif;

    background:linear-gradient(
        135deg,
        #6a11cb,
        #2575fc
    );

    padding:20px;
}

/* CONTAINER */

.card-container{
    perspective:1000px;
}

/* CARD */

.card{
    position:relative;

    width:500px;
    height:800px;

    transform-style:preserve-3d;

    transition:1s;
}

.card.flip{
    transform:rotateY(180deg);
}

/* FRONT & BACK */

.front,
.back{

    position:absolute;

    width:100%;
    height:100%;

    border-radius:25px;

    backface-visibility:hidden;

    box-shadow:0 10px 25px rgba(0,0,0,0.3);

     overflow-y:auto;
    padding:25px;

    color:white;
}

/* FRONT */

.front{

    background:linear-gradient(
        135deg,
        #6a11cb,
        #2575fc
    );

    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
}

/* BACK */

.back{

    background:linear-gradient(
        135deg,
        #2575fc,
        #6a11cb
    );

    transform:rotateY(180deg);

    overflow-y:auto;

    text-align:center;
}

/* FOTO */

img{

    width:140px;
    height:140px;

    border-radius:50%;

    object-fit:cover;

    border:5px solid white;

    margin-bottom:20px;
}

/* NAMA */

h1{

    font-size:2rem;

    margin-bottom:10px;
}

#typing{

    color:#e1e1e1;

    min-height:30px;

    margin-bottom:20px;
}

/* ABOUT */

.about{

    margin-top:15px;

    line-height:1.8;
}

.about h2{

    margin-bottom:15px;
}

/* PIE CHART */

.skill-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin: 20px 0;
}

.pie-chart {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background: conic-gradient(
        #4f46e5 0% 30%,
        #10b981 30% 80%,
        #f59e0b 80% 100%
    );
    box-shadow: 0 0 15px rgba(255,255,255,0.2);
}

.skill-list {
    text-align: left;
}

.skill-item {
    display: flex;
    align-items: center;
    margin: 12px 0;
    font-size: 18px;
}

.color {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 10px;
}

.uiux {
    background: #4f46e5;
}

.english {
    background: #10b981;
}

.hardware {
    background: #f59e0b;
}

/* LEGEND */

.legend{

    margin-top:20px;
}

.legend div{

    display:flex;

    align-items:center;
}
