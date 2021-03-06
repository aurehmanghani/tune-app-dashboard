import React from 'react';
import TuneChart from './TuneChart';

const dot = {
    height: '25px',
    width: '25px',
    backgroundColor: '#bbb',
    borderRadius: '50%',
    display: 'inline-block',
  };
function UserCard(props) {
    return (
        props.users.map(user=>(
            <div className="col-md-4" key={user.id}>
                <div className="card text-center">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-sm-2">
                            {(user.avatar) ? <img src={user.avatar} class="avatar"/> : <span style={dot}>{user.avatar}</span>}
                            </div>
                            <div className="col-sm-10">
                            <p class="text-left m-b-0">{user.name}</p>
                            <p className="text-left m-b-0 small text-secondary">{user.occupation}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                            <div className="row">
                                <div className="col-md-8 m-a-0 p-a-0">
                                    <TuneChart chartData={user.chart_data_revenue}></TuneChart>
                                </div>
                                <div className="col-md-4 m-a-0 p-a-0">
                                    {user.impression_count}
                                    <div>impression</div>
                                    {user.conversion_count}
                                    <div>conversion</div>
                                    {user.revenue}
                                    <div>Revenue</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        ))
    );
}

export default UserCard;