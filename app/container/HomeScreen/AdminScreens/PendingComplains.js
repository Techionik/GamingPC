import React from 'react'
import {
    ActivityIndicator,
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../../config/withLanguage";
import {Color, Constants} from "../../../common";

import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderWihBackground from "../../Components/HeaderWihBackground";
import PayRoleComponent from "../../Components/PayRoleComponent";
import LeaveComponent from "../../Components/LeaveComponent";
import {getComplains} from "../../../redux/user/operations";
import {connect} from "react-redux";
import ComplainComponent from "../../Components/ComplainComponent";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo,

});


@connect(
    mapStateToProps,
    {getComplains},
)
class PendingComplains extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Complains: [],
            refreshData: false,
            loading:false
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        const obj = {
            Complain_ID: ""
        }
        this.props.getComplains(obj).then((res) => {
            this.setState({Complains: res})
            this.setState({loading: false})
        }).catch((err) => {
            this.setState({loading: false})
            alert("Something went wrong please try again")
        })
    }

    getFreshData() {
        this.setState({refreshData: true})
        const obj = {
            Complain_ID: ""
        }
        this.props.getComplains(obj).then((res) => {
            this.setState({Complains: res})
            this.setState({refreshData: false})
        }).catch((err) => {
            this.setState({refreshData: false})
            alert("Something went wrong please try again")
        })
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View  style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                {this.state.loading&&    <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,zIndex:10,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:"center",alignItems:"center"}}>
                    <ActivityIndicator size={"large"} color={Color.primary}/>

                </View>}
                <HeaderWihBackground isBack={true} title={"Complains"} colors={colors} Props={this.props.value}/>
                <View>
                    <FlatList  contentContainerStyle={{flex:1}} refreshing={this.state.refreshData} onRefresh={() => {
                        this.getFreshData()
                    }} showsVerticalScrollIndicator={false} data={this.state.Complains}
                               renderItem={({item, index}) =>
                                   item.Statuss==="Pending"?
                                       <ComplainComponent colors={colors} item={item}/>:null
                               }/>
                </View>

            </View>

        );
    }
}

export default withLanguage(PendingComplains)
