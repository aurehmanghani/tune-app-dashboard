import React from 'react';
import TuneChart from './TuneChart';

function UserCard(props) {
    return (
        props.users.map(user=>(          
            <div className="col-md-4" key={user.id}>
                <div className="card text-center">
                    <div className="card-header">
                    <div className="row">
                        <div className="col-2">
                        <img src={user.avatar} alt="Avatar" class="avatar"/>
                        </div>
                        <div className="col">
                        <p>{user.name}</p>
                        <span className="small text-secondary">{user.occupation}</span>
                        </div>
                    </div>
                    </div>
                    <div className="card-body">
                            <div className="row">
                                <div className="col">
                                <TuneChart chartData={user.chart_data}></TuneChart>
                                </div>
                                <div className="col">
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