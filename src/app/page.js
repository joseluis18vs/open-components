import MosaicFourElements from "../components/containers/grids/mosaic_four_elements";
import MosaicSixElements from "../components/containers/grids/mosaic_six_elements";
import MosaicThreeCol from "../components/containers/grids/mosaic_three_col";
import MosaicThreeRows from "../components/containers/grids/mosaic_three_rows";
import SplitScreenHrzHide from "../components/containers/grids/split_screen_hrz_hide";
import SplitScreenHrzWrap from "../components/containers/grids/split_screen_hrz_wrap";
import SplitScreenVertHide from "../components/containers/grids/split_screen_vert_hide";
import SplitScreenVertOneMosaicThreeRows from "../components/containers/grids/split_screen_vert_one_mosaic_three_rows";
import SplitScreenVertThreeRowsOneMosaic from "../components/containers/grids/split_screen_vert_three_rows_one_mosaic";
import SplitScreenVertThreeRowsThreeMosaic from "../components/containers/grids/split_screen_vert_three_rows_three_mosaic";
import SplitScreenVertThreeRowsTwoMosaic from "../components/containers/grids/split_screen_vert_three_rows_two_mosaic";
import SplitScreenVertTwoMosaicThreeRows from "../components/containers/grids/split_screen_vert_two_mosaic_three_rows";
import SplitScreenVertWrap from "../components/containers/grids/split_screen_vert_wrap";

export default function Page()
{
    return(
        <div className="main">
            <SplitScreenVertWrap />
        </div>
    )
}
