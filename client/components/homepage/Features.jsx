import React from 'react';

const Features = () => (
  <div>
    <section id="features" className="section">
      <div className="container">
        <div className="row text-center-mobile">
          <div className="col-md-6">
            <div className="icon"><i className="glyphicon glyphicon-list-alt" /></div>
            <h2>Real-time Collaborative Coding</h2>
            <p>Instantly share code with your peers.</p>
            <p>Work together to solve problems, even running code right in your browser.</p>
            <p>Even drag and drop text into the coding environment to start coding from a file you have in progress.</p>
          </div>
          <div className="col-md-6">
            <p><img alt="" src="../img/collabcode.png" className="img-responsive" /></p>
          </div>
        </div>
      </div>
    </section>
    <section className="section background-gray-lightest">
      <div className="container">
        <div className="row text-center-mobile">
          <div className="col-md-6">
            <p><img alt="" src="../img/videochat.png" className="img-responsive" /></p>
          </div>
          <div className="col-md-6">
            <div className="icon brand-terciary"><i className="glyphicon glyphicon-facetime-video" /></div>
            <h2>Video & Voice Chat</h2>
            <p>Nothing beats talking through a problem face-to-face.</p>
            <p>With peer-to-peer video chat, you can talk with your coding partner from anywhere.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="features" className="section">
      <div className="container">
        <div className="row text-center-mobile">
          <div className="col-md-6">
            <div className="icon"><i className="glyphicon glyphicon-comment" /></div>
            <h2>Text Chat</h2>
            <p>Some things just need to be written down.</p>
            <p>Or just shouldn't be communicated verbally, like links.</p>
            <p>Message your colleagues while coding to send important information and access it anytime by signing up.</p>
          </div>
          <div className="col-md-6">
            <p><img alt="" src="../img/textchat.png" className="img-responsive" /></p>
          </div>
        </div>
      </div>
      <div id="testimonials" />
    </section>
  </div>
);

export default Features;
