import {connect} from 'react-redux';

// import and store in allActions.
import * as allActions from '../actions/actions';
import {bindActionCreators} from 'redux';

import MainComponent from '../components/main.component';

// Bind store to the props.
function mapStateToProps(storeData){
    return {
        myPosts: storeData.posts,
        myComments : storeData.comments
    }
}

// Bind dispacther to actions.
function mapDispacthToProps(dispatcher){
    return bindActionCreators(allActions, dispatcher);
}

var app = connect(mapStateToProps, mapDispacthToProps)(MainComponent);

export default app;