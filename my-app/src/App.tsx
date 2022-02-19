import Header from "./components/Header/Header";
import Products from "./components/ProductsList/ProductsList";
import FavouriteModal from "./components/ProductsList/FavouritesModal/FavouriteModal";
import store from "./store/store";
import { connect, MapStateToProps } from "react-redux";
import toggleFilterAction from "./store/actions/toggleFilterAction";
import toggleFavouriteModalAction from "./store/actions/toggleFavouriteModal";
import "./App.css";
import { Dispatch } from "react";
import { AnyAction, bindActionCreators } from "redux";

const actions = {
  toggleFilter: (): string => "none",
  toggleFavouriteModal: (): boolean => false,
};

interface Props extends StateProps, DispatchProps {}

function App(props: Props) {
  return (
    <div className="w-screen h-screen">
      <div className="flex w-full h-14">
        <Header />
      </div>
      <div className="flex w-full h-5/6 bg-backblue">
        <Products />
        {props.flag ? <FavouriteModal /> : null}
      </div>
    </div>
  );
}

interface StateProps {
  flag: boolean;
}

interface DispatchProps {
  toggleFilter: typeof actions.toggleFilter;
  toggleFavouriteModal: typeof actions.toggleFavouriteModal;
}

// To do: Right type in state and dispatch

const mapStateToProps = (state: any): StateProps => ({
  flag: state.toggleFavouriteModalReducer.flag,
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(
    {
      ...actions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
