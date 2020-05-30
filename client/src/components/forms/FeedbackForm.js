import React from 'react';

const FeedbackForm = () => {

  return(
    <div>
      <span><button>Like It</button><button>Love It</button><button>Needs Improvement</button></span>
      <textarea placeholder="Leave A comment here"></textarea>
      <button>Submit Feedback</button>
    </div>
  )
}

export default FeedbackForm