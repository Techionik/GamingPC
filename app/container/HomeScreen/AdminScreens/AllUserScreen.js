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

import HeaderWihBackground from "../../Components/HeaderWihBackground";
import {connect} from "react-redux";
import EmployLeaveComponent from "../../Components/EmployLeaveComponent";
import {getAllEmployees} from "../../../redux/user/operations";
import LeaveComponent from "../../Components/LeaveComponent";
import ComplainComponent from "../../Components/ComplainComponent";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo,

});


@connect(
    mapStateToProps,
    {getAllEmployees}
)
class AllUserScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshData: false,
            loading:false,
            allUsers:[]
        }
    }

    componentDidMount() {
        this.setState({loading: true})

        this.props.getAllEmployees().then(res => {
            if (res) {
                this.setState({loading: false})
                this.setState({allUsers: res})

            }
        }).catch(err => {
            this.setState({loading: false})
            alert("Some thing went wrong please try again")
        })
    }
    GetEmployee() {
        this.setState({refreshData: true})
        this.props.getAllEmployees().then(res => {
            if (res) {
                this.setState({refreshData: false})
                this.setState({allUsers: res})
            }
        }).catch(err => {
            this.setState({refreshData: false})
            alert("Some thing went wrong please try again")
        })
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (

            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                {this.state.loading&&    <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,zIndex:10,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:"center",alignItems:"center"}}>
                    <ActivityIndicator size={"large"} color={Color.primary}/>

                </View>}
                <HeaderWihBackground isBack={true} title={"Leaves"} colors={colors} Props={this.props.value}/>

                <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 20,}}>
                    <View>
                    <FlatList refreshing={this.state.refreshData} onRefresh={()=>{
                        this.GetEmployee()
                    }} contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false}
                              data={this.state.allUsers}
                              renderItem={({item, index}) =>
                                  <ComplainComponent onPress={()=>{this.props.navigation.navigate("ViewCurrentUser",{data:item})}} item={item} colors={colors}/>
                    }/>
                    </View>
                </View>
            </View>
        );
    }}
export default withLanguage(AllUserScreen)