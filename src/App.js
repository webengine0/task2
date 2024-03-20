import React from "react";

import StoryCard from "./storycard";

function App() {
  return (
    <div className="App">
      <StoryCard
        main_image="./Hougen.png"
        story_number="08"
        storytitle="The Story of the Kandi"
        star_image="./star.png"
        name="Hougen"
        name_sub="onmyoji"
        detail="“Let us command the Curse Masters to control Yōkai and make them fight.”"
      />
    </div>
  );
}

export default App;
