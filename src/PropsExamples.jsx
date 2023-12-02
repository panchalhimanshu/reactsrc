import React from 'react';

class PropsExamples extends React.Component
 {
    
    // constructor(props)
    // {
    //     super();
    // }

 render()
 {
    return (
        <div>
            {this.props.name}
        </div>
      );
 }
}

export default PropsExamples;
