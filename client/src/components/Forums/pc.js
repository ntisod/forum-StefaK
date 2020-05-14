import React, { useState, useEffect } from "react";
import { getAllForums } from "../../services/forumService";

export default _=> {
    const getAllForums = _ => {
        let data = JSON.parse(await getAllForums());
        if (data.status !== 200) {
            return this.setState({
                status: data.status,
                error: data.error
            });
        }
        console.log(data.forums)

    }
}
}